using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace sdlt.Controllers
{
    [RoutePrefix("api/Orden")]
    public class OrdenesDeliveryController : ApiController
    {
        [HttpPost]
        [Route("Pagar")]
        public async Task<IHttpActionResult> Pagar(ObjetoEncima objetoEncima)
        {
            // primero necesito saber que usuario paga (correo)
            // llamar a un procedimiento almacenado, este tiene que insertar
            // tratar que el array de detalles se serialice en icollection de detalles
            // ------------2 parámetros o parámetros anidados
            return Content(HttpStatusCode.OK, objetoEncima.paraArray);
        }
    }
}