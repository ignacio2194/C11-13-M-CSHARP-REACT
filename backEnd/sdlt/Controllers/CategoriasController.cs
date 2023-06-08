using sdlt.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace SDLTdb.Controllers
{
    [RoutePrefix("api/Categorias")]
    public class CategoriasController : ApiController
    {
        private SDLTDb db = new SDLTDb();
        // GET: Categorias/GetAll
        [HttpGet]
        [Route("GetAll")]
        //[Authorize(Roles = "User,Administrator")]
        public IQueryable<Categoria> GetAll()
        {
            return db.Categoria;
        }

        // GET: Categorias/Get
        [HttpGet]
        [Route("GetCategoria")]
        public Categoria GetCategoria([FromUri] int? id)
        {
            Categoria puedeCategoriaPa = db.Categoria.First(m => m.CategoriaId == id);
            if (puedeCategoriaPa is null)
            {
                return new Categoria
                {
                    Descripcion = "No se encontró Categoría"
                };
            }
            else
            {
                return puedeCategoriaPa;
            }
        }

        // POST: Categorias/Create
        //[Authorize(Roles = "admin")]
        [HttpPost]
        [Route("Create")]
        public async Task<IHttpActionResult> Create(Categoria categoria)
        {
            if (categoria != null)
            {
                var categoriaNueva = db.Categoria.Add(categoria);

                await db.SaveChangesAsync();
                return Content(HttpStatusCode.Created, categoriaNueva);
            }
            return Content(HttpStatusCode.BadRequest, "Compruebe los requerimientos");
        }
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}