using MercadoPago.Client.Preference;
using MercadoPago.Config;
using MercadoPago.Resource.Preference;
using Microsoft.AspNet.Identity;
using Newtonsoft.Json;
using sdlt.DTOs;
using sdlt.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace sdlt.Controllers
{
    
    [EnableCors(origins: "https://sdlt2.azurewebsites.net", headers: "*", methods: "*")]
    [RoutePrefix("api/Orden")]
    public class OrdenesDeliveryController : ApiController
    {
        List<ProductoPagoDto> productosPorPersistir;
        [HttpPost]
        [Route("CrearPrefMP")]
        
        public async Task<IHttpActionResult> CrearPrefMP(TotalCarritoDto totalCarrito)
        {
            // List<CarritoDto> carrito
            MercadoPagoConfig.AccessToken = "TEST-8745031599738171-050420-9199ef6aa7d3367a72271aec715b20df-57697661";
            string url = "https://sdlt2.azurewebsites.net";
            //string url = "https://4600-181-94-248-186.ngrok-free.app";
            //var losItems = new List<PreferenceItemRequest>();
            //foreach (var itemDelCarrito in carrito)
            //{
            //    var itemParaAgregar = new PreferenceItemRequest
            //    {
            //        Title = itemDelCarrito.Description,
            //        Quantity = itemDelCarrito.Quantity,
            //        CurrencyId = "USD",
            //        UnitPrice = itemDelCarrito.Price,
            //    };
            //    losItems.Add(itemParaAgregar);
            //}

            var request = new PreferenceRequest
            {
                BackUrls = new PreferenceBackUrlsRequest {
                    Success = $"{url}/Home/",
                    Failure = $"{url}/Home/",
                    Pending = "" },
                AutoReturn = "approved",
                NotificationUrl = $"{url}/api/Orden/Notify/",//mercado pago manda un post a esta url luego de que finalice el pago
                Items = new List<PreferenceItemRequest>
                    {
                        new PreferenceItemRequest
                        {
                            Title = totalCarrito.descriptions,
                            Quantity = 1,
                            CurrencyId = "ARS",
                            UnitPrice = totalCarrito.total,
                        },
                    },
            }; 
            // Crea la preferencia usando el client
            var client = new PreferenceClient();
            Preference preference = await client.CreateAsync(request);

            return Content(HttpStatusCode.OK, preference);
        }

        [HttpPost]
        [Route("GuardarOrden")]
        //[Authorize(Roles = "User,Administrator")]
        public async Task<IHttpActionResult> GuardarOrden(List<ProductoPagoDto> productos)
        {
            productosPorPersistir = null;

            OrdenDelivery ordenDelivery = new OrdenDelivery()
            {
                NroOrden = GenerarNroOrdenDePago(),
                Fecha = DateTime.Now,
                ClienteId = User.Identity.GetUserId(),
                RestauranteId = 1,
                DetalleOrdenDelivery = CrearLaListaDeDetalles(productos)
            };
            if(ordenDelivery != null)
            {
                return Content(HttpStatusCode.OK, "Todo OK");
            }
            else
            {
                return Content(HttpStatusCode.BadRequest, "Hubo un error al intentar guardar los datos");
            }
            
        }   
    
        private int GenerarNroOrdenDePago()
        {
            Random random = new Random();
            return random.Next(1, 55);//esto es arbitrario

        }
        private List<DetalleOrdenDelivery> CrearLaListaDeDetalles(List<ProductoPagoDto> productosPorPersistir)
        {
            SDLTDb db = new SDLTDb();
            List<DetalleOrdenDelivery> detalles = new List<DetalleOrdenDelivery>();
            foreach(ProductoPagoDto p in productosPorPersistir)
            {
                DetalleOrdenDelivery unDetalle = new DetalleOrdenDelivery()
                {
                    OrdenId = null,
                    ProductoId = db.Producto.First(prod => prod.Nombre == p.Nombre).ProductoId,
                    Cantidad = p.cantidad,
                    PrecioUnitario = p.Precio,
                };
                detalles.Add(unDetalle);
            }
            return detalles;
        }

        [HttpPost]
        [Route("PersistirOrden")]
        public async Task<IHttpActionResult> PersistirOrden(Object elObjeto)
        {
            /* si fue exitoso (estado aprobado)
             * persistir con un procedimiento almacenado sino no
             * en los dos casos al final borrar el objeto*/
            return Content(HttpStatusCode.OK, elObjeto);
        }
        [HttpPost]
        [Route("Notify")]
        public async Task<IHttpActionResult> Notify(string data)
        {
            string jsonData = JsonConvert.SerializeObject(data);
            Console.WriteLine("Esta es una notificación:", jsonData);
            Console.WriteLine(jsonData);
            string path = @"c:\MyTest.txt";
            try
            {
                // Create the file, or overwrite if the file exists.
                using (FileStream fs = File.Create(path))
                {
                    byte[] info = new UTF8Encoding(true).GetBytes(jsonData);
                    // Add some information to the file.
                    fs.Write(info, 0, info.Length);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }
            return Content(HttpStatusCode.OK, jsonData);
        }
    }
}