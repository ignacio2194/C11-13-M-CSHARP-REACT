using sdlt.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace sdlt.Controllers
{
    [RoutePrefix("api/ResEvento")]
    public class ReservaEnEventoController : ApiController
    {
        private SDLTDb db = new SDLTDb();

        // GET: Reservas/GetAll
        [HttpGet]
        [Route("GetAll")]
        public IQueryable<ReservacionEnEvento> GetAll()
        {
            return db.ReservacionEnEvento;
        }

        //GET: Reservas/GetReserva
        [HttpGet]
        [Route("GetReservaEE")]
        public ReservacionEnEvento GetReservaE([FromUri] int? id)
        {
            return db.ReservacionEnEvento.FirstOrDefault(c => c.ReservacionEnEventoId == id);
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