using MercadoPago.Client.Preference;
using MercadoPago.Config;
using MercadoPago.Resource.Preference;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace sdlt.Controllers
{
    [RoutePrefix("api/Orden")]
    public class OrdenesDeliveryController : ApiController
    {
        [HttpPost]
        [Route("CrearPrefMP")]
        public async Task<IHttpActionResult> CrearPrefMP()
        {
            var request = new PreferenceRequest
            {
                BackUrls = new PreferenceBackUrlsRequest {
                    Success = "http://localhost:44335/success",
                  Failure = "https://www.youtube.com/watch?v=Fw3RB7xnb80", 
                   Pending = "" },
                AutoReturn = "approved",
                NotificationUrl = "https://misitio/server",//mercado pago manda un post a esta url luego de que finalice el pago
                Items = new List<PreferenceItemRequest>
                {
                    new PreferenceItemRequest
                    {
                        Title = "Mi producto",
                        Quantity = 1,
                        CurrencyId = "USD",
                        UnitPrice = 20.0m,
                    },
                    new PreferenceItemRequest
                    {
                        Title = "Mi producto fachero",
                        Quantity = 1,
                        CurrencyId = "USD",
                        UnitPrice = 20.0m,
                    }
                },
            };
        
            // Crea la preferencia usando el client
            var client = new PreferenceClient();
            Preference preference = await client.CreateAsync(request);

            return Content(HttpStatusCode.OK, preference);
        }
    }
}