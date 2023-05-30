using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace sdlt.Models
{
    [Table("Producto")]
    public class Producto
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int? ProductoId { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public decimal Precio { get; set; }
        [ForeignKey("Categoria")]
        public int? CategoriaId { get; set; }
        public int? Stock { get; set; }
        public bool EstaActivo { get; set;}
        [JsonIgnore]
        [ForeignKey("CategoriaId")]
        public Categoria Categoria { get; set; }
    }
}