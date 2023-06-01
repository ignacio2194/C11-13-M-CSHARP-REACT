using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace sdlt.Controllers
{
    public class ObjetoEncima
    {
        public string Cadena1 { get; set; }
        public string Cadena2 { get; set; }
        public ICollection<ParaArray> paraArray { get; set; }
    }
}