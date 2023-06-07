using Microsoft.AspNet.Identity;
using sdlt.DTOs;
using sdlt.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Validation;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace sdlt.Controllers
{
    [RoutePrefix("api/Reservas")]
    public class ReservasController : ApiController { 

        private readonly SDLTDb db = new SDLTDb();

        // GET: Reservas/GetAll
        [HttpGet]
        [Route("GetAll")]
        public IQueryable<ReservaOutDto> GetAll()
        {
            string nombreDelProcedimiento = "ObtenerReservas";
            var result = new List<ReservaOutDto>();
            using (SqlConnection connection = new SqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["SDLTDb"].ToString()))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(nombreDelProcedimiento, connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        ReservaOutDto reservaOutDto;
                        while (reader.Read())
                        {
                            reservaOutDto = new ReservaOutDto
                            {
                                ReservaId = int.Parse(reader[0].ToString()),
                                FechaHora = DateTime.Parse(reader[1].ToString()),
                                Precio = decimal.Parse(reader[2].ToString()),
                                User = reader[4].ToString(),
                                EventoId = int.Parse(reader[5].ToString()),
                                Evento = reader[6].ToString(),
                                Cantidad = int.Parse(reader[7].ToString())
                            };
                            result.Add(reservaOutDto);
                        }
                    }
                    connection.Close();
                    return result.AsQueryable();
                }
            }
        }

        // GET: Comidas/GetComida
        [HttpGet]
        [Route("GetReserva")]
        public Reserva GetReserva([FromUri] int? id)
        {
            return db.Reserva.FirstOrDefault(c => c.ReservaId == id);
        }
        [HttpPost]
        [Route("Create")]
        [Authorize(Roles = "User,Administrator")]
        public async Task<IHttpActionResult> Create(ReservacionDto reservacion)
        {
            try
            {

           
            if (reservacion != null)
            {
            
                Evento elEventoCorrespondiente = db.Evento.FirstOrDefault(e => e.EventoId == reservacion.EventoId);
                if (elEventoCorrespondiente != null)
                {
                    if(elEventoCorrespondiente.Stock == 0)
                    {
                        return Content(HttpStatusCode.BadRequest, "Error, ya no hay lugares libres"); 
                    }
                    if (elEventoCorrespondiente.Stock > 0)
                    {
                        int? diferencia = elEventoCorrespondiente.Stock - reservacion.Cantidad;
                        if (diferencia != null)
                        {
                            if (diferencia >= 0)
                            {
                                elEventoCorrespondiente.Stock -= reservacion.Cantidad;
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
                Reserva laReserva = new Reserva()
                {
                    FechaHora = reservacion.FechaHora,
                    Precio = db.Evento.First(e => e.EventoId == reservacion.EventoId).Precio,
                    UserId = User.Identity.GetUserId(),
                    EventoId = reservacion.EventoId,
                    Cantidad = reservacion.Cantidad,
                    Evento = db.Evento.Find(reservacion.EventoId),
                    AspNetUsers = db.AspNetUsers.Find(User.Identity.GetUserId())
                };
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
            catch (DbEntityValidationException ex)
            {
                // Recorremos los errores de validación
                foreach (var error in ex.EntityValidationErrors)
                {
                    // Recorremos las propiedades con errores
                    foreach (var validationError in error.ValidationErrors)
                    {
                        string propertyName = validationError.PropertyName;
                        string errorMessage = validationError.ErrorMessage;

                        // Puedes manejar los errores de validación de acuerdo a tus necesidades
                        // Por ejemplo, podrías loguearlos o devolverlos en la respuesta de la API
                    }
                }
                return Content(HttpStatusCode.InternalServerError, ex);
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