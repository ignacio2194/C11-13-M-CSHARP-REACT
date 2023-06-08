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
    [RoutePrefix("api/Eventos")]
    public class EventosController : ApiController
    {
        private SDLTDb db = new SDLTDb();
        // GET: Categorias/GetAll
        [HttpGet]
        [Route("GetAll")]
        //[Authorize(Roles = "User,Administrator")]
        public IQueryable<Evento> GetAll()
        {
            return db.Evento;
        }

        // GET: Categorias/Get
        [HttpGet]
        [Route("GetEvento")]
        public Evento GetEvento([FromUri] int? id)
        {
            Evento puedeEventoPa = db.Evento.First(m => m.EventoId == id);
            if (puedeEventoPa is null)
            {
                return null;
            }
            else
            {
                return puedeEventoPa;
            }
        }

        // POST: Categorias/Create
        //[Authorize(Roles = "admin")]
        [HttpPost]
        [Route("Create")]
        public async Task<IHttpActionResult> Create(Evento evento)
        {
            if (evento != null)
            {
                var eventoNuevo = db.Evento.Add(evento);

                await db.SaveChangesAsync();
                return Content(HttpStatusCode.Created, eventoNuevo);
            }
            return Content(HttpStatusCode.BadRequest, "Compruebe los requerimientos");
        }
        [HttpPut]
        [Route("Activar")]
        public async Task<IHttpActionResult> ActivarEvento(ActivacionEventoDto activacionEventoDto)
        {
            if (activacionEventoDto != null)
            {
                Evento elEvento = db.Evento.FirstOrDefault(e => e.EventoId == activacionEventoDto.EventoId);
                if (elEvento != null)
                {
                    elEvento.Stock = activacionEventoDto.Stock;
                    elEvento.RestauranteId = activacionEventoDto.RestauranteId;
                    elEvento.Precio = activacionEventoDto.Precio;
                    db.Entry(elEvento).State = EntityState.Modified;
                    await db.SaveChangesAsync();
                    return Ok(elEvento);
                }
                else
                {
                    return Content(HttpStatusCode.BadRequest, "Id de evento no existente. Intente de nuevo");
                }

                
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