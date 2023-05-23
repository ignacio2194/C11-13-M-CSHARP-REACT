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
        [Authorize(Roles = "User,Administrator")]
        public IQueryable<Categoria> GetAll()
        {
            return db.Categoria;
        }

        // GET: Categorias/Get
        [HttpGet]
        [Route("GetCategoria")]
        public async Task<IHttpActionResult> GetCategoria([FromUri] int? id)
        {
            Categoria puedeCategoriaPa = db.Categoria.First(m => m.CategoriaId == id);
            if (puedeCategoriaPa is null)
            {
                return Content(HttpStatusCode.NotFound, "El id no es válido.");
            }
            else
            {
                return Content(HttpStatusCode.OK, puedeCategoriaPa);
            }
        }

        // POST: Categorias/Create
        [Authorize(Roles = "admin")]
        [HttpPost]
        [Route("Create")]
        public async Task<IHttpActionResult> Create(Categoria categoria)
        {
            if (categoria != null)
            {
                var comidaNueva = db.Categoria.Add(categoria);

                await db.SaveChangesAsync();
                return Content(HttpStatusCode.Created, comidaNueva);
            }
            return Content(HttpStatusCode.BadRequest, "Compruebe los requerimientos");
        }
    }
}