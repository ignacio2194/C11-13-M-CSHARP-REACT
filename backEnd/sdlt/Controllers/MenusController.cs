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
    [RoutePrefix("api/Menus")]
    public class MenusController : ApiController
    {
        private SDLTDb db = new SDLTDb();

        // GET: Comidas/GetAll
        [HttpGet]
        [Route("GetAll")]
        public IQueryable<MenuItem> GetAll()
        {
            return db.MenuItem;
        }

        // GET: Comidas/GetMenu
        [HttpGet]
        [Route("GetMenu")]
        public MenuItem GetMenu([FromUri] int? id)
        {
            return db.MenuItem.FirstOrDefault(m => m.MenuItemId == id);
        }

        [HttpGet]
        [Route("GetByType")]
        public IQueryable<MenuItem> GetByType([FromUri] bool? EsComida)
        {
            if (EsComida == true)
            {
                return db.MenuItem.Where(c => c.EsComida == true);
            }
            else
            {
                return db.MenuItem.Where(c => c.EsBebida == true);
            }
            
        }
        [Authorize]
        [HttpPost]
        [Route("CreateItem")]
        public async Task<IHttpActionResult> CreateItem(MenuItem menu)
        {
            if (menu != null && (menu.EsBebida == true || menu.EsComida == true))
            {
                MenuItem itemDeMenuConIDnuevecito = db.MenuItem.Add(menu);
                int i = await db.SaveChangesAsync();

                if (i > 0)
                {
                    return Content(HttpStatusCode.Created, itemDeMenuConIDnuevecito);
                }
                return Content(HttpStatusCode.InternalServerError, "Error al intentar insertar con sql. No se pudo guardar los cambios");
            }
            return Content(HttpStatusCode.BadRequest, "Compruebe los requerimientos");
        }

        [HttpPut]
        [Route("Modify")]
        //[Authorize]
        public async Task<IHttpActionResult> Modify(MenuItem menu)
        {
            db.Entry(menu).State = EntityState.Modified;
            await db.SaveChangesAsync();
            return Ok(menu);
        }
        [HttpGet]
        [Route("Delete{id}")]
        //[Authorize]
        public async Task<IHttpActionResult> Delete([FromUri] int? id)
        {
            if (id == null)
            {
                return Content(HttpStatusCode.BadRequest, "Id vacío");
            }
            MenuItem menu = await db.MenuItem.FindAsync(id);
            if (menu == null)
            {
                return Content(HttpStatusCode.NotFound, "Bebida no encontrada");
            }
            return Content(HttpStatusCode.OK, db.MenuItem.Remove(menu));
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