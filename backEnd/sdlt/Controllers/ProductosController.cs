using sdlt.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace sdlt.Controllers
{
    [RoutePrefix("api")]
    public class ProductosController : ApiController
    {
        SDLTDb db = new SDLTDb();

        [HttpGet]
        [Route("Productos/GetAll")]
        public IQueryable<Producto> GetAll()
        {
            return db.Producto;
        }   
        // GET: Producto/GetProducto
        [HttpGet]
        [Route("Productos/GetProducto")]
        public Producto GetComida([FromUri] int? id)
        {
            return db.Producto.FirstOrDefault(c => c.ProductoId == id);
        }

        [HttpGet]
        [Route("Comidas/GetAllC")]
        public IQueryable<Producto> GetAllC()
        {

            return db.Producto.Where(p => p.CategoriaId == 3 || p.CategoriaId == 4
            || p.CategoriaId == 5 || p.CategoriaId == 6
            || p.CategoriaId == 7 || p.CategoriaId == 8);
        }

        [HttpGet]
        [Route("Bebidas/GetAllB")]
        public IQueryable<Producto> GetAllB()
        {
            return db.Producto.Where(p => p.CategoriaId == 1 || p.CategoriaId == 2);
        }
        [HttpGet]
        [Route("Productos/GetByCategory")]
        public IQueryable<Producto> GetByCategory([FromUri] int categoriaId)
        {

            return db.Producto.Where(p => p.CategoriaId == categoriaId);
        }
        [HttpPost]
        [Route("Productos/Create")]
        //[Authorize(Roles ="Administrator")]
        public async Task<IHttpActionResult> Create(Producto producto)
        {
            db.Producto.Add(producto);
            int? guardados = await db.SaveChangesAsync();
            if(guardados > 0)
            {
                return Content(HttpStatusCode.Created, producto);
            }
            else
            {
                return Content(HttpStatusCode.InternalServerError
                    , "No se pudo procesar correctamente la solicitud de creado. Intente otra vez");
            }
            
        }
        [HttpPut]
        [Route("Productos/Modify")]
        //[Authorize(Roles ="Administrator")]
        public async Task<IHttpActionResult> Modify(Producto producto)
        {
            if (producto.ProductoId == null)
            {
                return Content(HttpStatusCode.BadRequest, "Id vacío");
            }
            db.Entry(producto).State = EntityState.Modified;
            int cambios = await db.SaveChangesAsync();
            if(cambios > 0)
            {
                return Ok(producto);
            }
            else
            {
                return Content(HttpStatusCode.InternalServerError, 
                    "No se actualizó ninguna fila. Intente otra vez");
            }
            
        }
        [HttpGet]
        [Route("Productos/Delete{id}")]
        [Authorize]
        public async Task<IHttpActionResult> Delete([FromUri] int? id)
        {
            if (id == null)
            {
                return Content(HttpStatusCode.BadRequest, "Id vacío");
            }
            Producto producto = await db.Producto.FindAsync(id);
            if (producto == null)
            {
                return Content(HttpStatusCode.NotFound, "Producto no encontrado");
            }
            return Content(HttpStatusCode.OK, db.Producto.Remove(producto));
        }
    }
}