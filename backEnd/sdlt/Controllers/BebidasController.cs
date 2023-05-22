using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using Newtonsoft.Json;
using sdlt.Models;

namespace sdlt.Controllers
{
    
    // eliminar todos los "[Bind(Include = "Descripcion, EsBebida, EsComida")]" que haya
    [RoutePrefix("api/Bebidas")]
    public class BebidasController : ApiController
    {
        private SDLTDb db = new SDLTDb();

        // GET: Bebidas/GetAll
        [HttpGet]
        [Route("GetAll")]
        public IQueryable<Bebida> GetAll()
        {
            return db.Bebida;
        }

        [HttpGet]
        [Route("GetBebida")]
        public Bebida Get([FromUri] int? id)
        {
            return db.Bebida.FirstOrDefault(b => b.BebidaId == id);
        }

        //[HttpGet]
        //[Route("GetByCategory")]
        //public IQueryable<Bebida> GetByCategory(int? categoryId)
        //{
        //    return db.Bebida.Where(b => b.Categoria.CategoriaId == categoryId);
        //}
        //[Authorize]
        //[HttpPost]
        //[Route("CreateItem")]
        //public async Task<IHttpActionResult> CreateItem(Menu menu)
        //{
        //    if (menu != null && (menu.EsBebida == true || menu.EsComida == true))
        //    {     
        //        Menu itemDeMenuConIDnuevecito = db.Menu.Add(menu);
        //        int i = await db.SaveChangesAsync();

        //        if (i > 0)
        //        {
        //            return Content(HttpStatusCode.Created, itemDeMenuConIDnuevecito);
        //        }
        //        return Content(HttpStatusCode.InternalServerError, "Error al intentar insertar con sql. No se pudo guardar los cambios");
        //    }
        //    return Content(HttpStatusCode.BadRequest, "Compruebe los requerimientos");
        //}

        //  POST: Bebidas/CreateBebida
       [Authorize]
       [HttpPost]
       [Route("Create")]
        public async Task<IHttpActionResult> Create(Bebida bebida)
        {
            if (bebida != null)
            {
                MenuItem menu = db.MenuItem.Find(bebida.BebidaId);
                if (menu != null)
                {
                    var bebidaNueva = db.Bebida.Add(bebida);

                    await db.SaveChangesAsync();
                    return Content(HttpStatusCode.Created, bebidaNueva);
                }
                return Content(HttpStatusCode.BadRequest, "Compruebe los requerimientos. No es un ítemmenúID válido a ser insertado como bebida");
            }
            return Content(HttpStatusCode.BadRequest, "Compruebe los requerimientos");
        }
        //Get: Bebidas/Delete
       [HttpGet]
        [Route("Delete{id}")]
        [Authorize]
        public async Task<IHttpActionResult> Delete([FromUri] int? id)
        {
            if (id == null)
            {
                return Content(HttpStatusCode.BadRequest, "Id vacío");
            }
            Bebida bebida = await db.Bebida.FindAsync(id);
            if (bebida == null)
            {
                return Content(HttpStatusCode.NotFound, "Bebida no encontrada");
            }
            return Content(HttpStatusCode.OK, db.Bebida.Remove(bebida));
        }
        // POST: Bebidas/Modify
        [HttpPut]
        [Route("Modify")]
        [Authorize]
        public async Task<IHttpActionResult> Edit(Bebida bebida)
        {
            db.Entry(bebida).State = EntityState.Modified;
            await db.SaveChangesAsync();
            return Ok(bebida);        
        }
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
        #region Por si acaso
        //// GET: Bebidas/Edit/5
        //public ActionResult Edit(int? id)
        //{
        //    if (id == null)
        //    {
        //        return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
        //    }
        //    Bebida bebida = db.Bebida.Find(id);
        //    if (bebida == null)
        //    {
        //        return HttpNotFound();
        //    }
        //    ViewBag.Categoria = new SelectList(db.Categoria, "ID", "Descripcion", bebida.Categoria);
        //    ViewBag.RegionPais = new SelectList(db.RegionPais, "ID", "Descripcion", bebida.RegionPais);
        //    return View(bebida);
        //}

        // GET: Bebidas/Details/5
        //public ActionResult Details(int? id)
        //{
        //    if (id == null)
        //    {
        //        return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
        //    }
        //    Bebida bebida = db.Bebida.Find(id);
        //    if (bebida == null)
        //    {
        //        return HttpNotFound();
        //    }
        //    return View(bebida);
        //}

        // GET: Bebidas/Create
        //public string Create()
        //{
        //    ViewBag.Categoria = new SelectList(db.Categoria, "ID", "Descripcion");
        //    ViewBag.RegionPais = new SelectList(db.RegionPais, "ID", "Descripcion");
        //    return View();

        //}

        // POST Bebidas/CreateItem
        // tiene que estar en menu, pero está acá por ahora


        //// POST: Bebidas/Delete/5
        //[HttpPost, ActionName("Delete")]
        //[ValidateAntiForgeryToken]
        //public ActionResult DeleteConfirmed(int id)
        //{
        //    Bebida bebida = db.Bebida.Find(id);
        //    db.Bebida.Remove(bebida);
        //    db.SaveChanges();
        //    return RedirectToAction("Index");
        //}
        #endregion

    }
}
