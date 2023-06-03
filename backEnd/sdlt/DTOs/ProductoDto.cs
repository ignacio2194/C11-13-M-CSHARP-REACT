using Newtonsoft.Json;
using sdlt.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace sdlt.DTOs
{
    public class ProductoDto
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int? ProductoId { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public decimal Precio { get; set; }
        [ForeignKey("Categoria")]
        public string CategoriaId { get; set; }
        public int? Stock { get; set; }
        public bool EstaActivo { get; set; }
        [JsonIgnore]
        [ForeignKey("CategoriaId")]
        public Categoria Categoria { get; set; }
    }
}