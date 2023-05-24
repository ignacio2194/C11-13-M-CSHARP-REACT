using sdlt.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace sdlt.Controllers
{
    [RoutePrefix("api/Reservas")]
    public class ReservasController : ApiController { 

        private SDLTDb db = new SDLTDb();

        // GET: Reservas/GetAll
        [HttpGet]
        [Route("GetAll")]
        public IQueryable<Reserva> GetAll()
        {
            return db.Reserva;
        }

        // GET: Comidas/GetComida
        [HttpGet]
        [Route("GetReserva")]
        public Reserva GetReserva([FromUri] int? id)
        {
            return db.Reserva.FirstOrDefault(c => c.ReservaId == id);
        }
        [HttpPost]
        //[Authorize(Roles ="User,Administrator")]
        [Route("Create")]
        public async Task<IHttpActionResult> Create(Reserva reserva)
        {
            if(reserva != null)
            {
                db.Reserva.Add(reserva);
                await db.SaveChangesAsync();
                return Content(HttpStatusCode.Created, reserva);
            }
            else
            {
                return Content(HttpStatusCode.BadRequest, "Error, reserva vacía");
            }
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