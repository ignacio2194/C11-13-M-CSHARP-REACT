using Microsoft.AspNet.Identity;
using sdlt.DTOs;
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
        [Authorize(Roles ="User,Administrator")]
        [Route("Create")]
        public async Task<IHttpActionResult> Create(ReservacionDto reservacion)
        {
            if(reservacion != null)
            {
                Reserva laReserva = new Reserva()
                {
                    FechaHora = reservacion.FechaHora,
                    Precio = db.Evento.First(e => e.EventoId == reservacion.EventoId).Precio,
                    UserId = User.Identity.GetUserId(),
                    EventoId = reservacion.EventoId,
                    Cantidad = reservacion.Cantidad
                };
                Evento elEventoCorrespondiente = db.Evento.FirstOrDefault(e => e.EventoId == laReserva.EventoId);
                if (elEventoCorrespondiente != null)
                {
                    if(elEventoCorrespondiente.Stock == 0)
                    {
                        return Content(HttpStatusCode.BadRequest, "Error, ya no hay lugares libres"); 
                    }
                    if (elEventoCorrespondiente.Stock > 0)
                    {
                        int? diferencia = elEventoCorrespondiente.Stock - laReserva.Cantidad;
                        if (diferencia != null)
                        {
                            if (diferencia >= 0)
                            {
                                elEventoCorrespondiente.Stock -= laReserva.Cantidad;
                            }
                            else
                            {
                                return Content(HttpStatusCode.BadRequest,
                                    "Error ya no quedan lugares, solo quedan " +
                                    elEventoCorrespondiente.Stock + " lugares");
                            }
                        }
                        else
                        {
                            return Content(HttpStatusCode.BadRequest,
                                   "Error, el stock del evento y/o la cantidad a reservar está(n) vacía(s)");
                        }
                       
                    }
                }
                else
                {
                    return Content(HttpStatusCode.BadRequest,
                        "Error, EventoId no coincide con ningún evento");
                }
                db.Entry(elEventoCorrespondiente).State = EntityState.Modified;
                Reserva reservaNueva = db.Reserva.Add(laReserva);
                int cambios = await db.SaveChangesAsync();
                if(cambios > 0)
                {
                    return Content(HttpStatusCode.Created, reservaNueva);
                }else
                {
                    return Content(HttpStatusCode.InternalServerError,
                        "Error, la solicitud no pudo ser procesada. Intente de nuevo luego");
                }                
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