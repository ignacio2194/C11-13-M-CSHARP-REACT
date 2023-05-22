using sdlt.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace SDLTdb.Controllers
{
    [System.Web.Http.RoutePrefix("api/Comidas")]
    public class ComidasController : ApiController
    {
        private SDLTDb db = new SDLTDb();

        // GET: Comidas/GetAll
        [HttpGet]
        [Route("GetAll")]
        public IQueryable<Comida> GetAll()
        {
            return db.Comida;
        }

        // GET: Comidas/GetComida
        [HttpGet]
        [Route("GetComida")]
        public Comida GetComida([FromUri] int? id)
        {
            return db.Comida.FirstOrDefault(c => c.ComidaId == id);
        }

        [HttpGet]
        [Route("GetByCategory")]
        public IQueryable<Comida> GetByCategory([FromUri] int? categoriaId)
        {
            return db.Comida.Where(c => c.CategoriaId == categoriaId);
        }


        // POST: Bebidas/Create
        [Authorize]
        [HttpPost]
        [Route("Create")]
        public async Task<IHttpActionResult> Create(Comida comida)
        {
            if (comida != null)
            {
                MenuItem menu = db.MenuItem.Find(comida.ComidaId);
                if (menu != null)
                {
                    var comidaNueva = db.Comida.Add(comida);

                    await db.SaveChangesAsync();
                    return Content(HttpStatusCode.Created, comidaNueva);
                }
                return Content(HttpStatusCode.BadRequest, "Compruebe los requerimientos. No es un ítemmenúID válido a ser insertado como bebida");
            }
            return Content(HttpStatusCode.BadRequest, "Compruebe los requerimientos");
        }
        [HttpPut]
        [Route("Modify")]
        [Authorize]
        public async Task<IHttpActionResult> Modify(Comida comida)
        {
            db.Entry(comida).State = EntityState.Modified;
            await db.SaveChangesAsync();
            return Ok(comida);
        }
        [HttpGet]
        [Route("Delete{id}")]
        [Authorize]
        public async Task<IHttpActionResult> Delete([FromUri] int? id)
        {
            if (id == null)
            {
                return Content(HttpStatusCode.BadRequest, "Id vacío");
            }
            Comida comida = await db.Comida.FindAsync(id);
            if (comida == null)
            {
                return Content(HttpStatusCode.NotFound, "Bebida no encontrada");
            }
            return Content(HttpStatusCode.OK, db.Comida.Remove(comida));
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
