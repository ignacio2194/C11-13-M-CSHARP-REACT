namespace sdlt.Models
{
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Comida")]
    public partial class Comida
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int ComidaId { get; set; }

        [StringLength(45)]
        public string Nombre { get; set; }

        public decimal? Precio { get; set; }
        [ForeignKey("Categoria")]
        public int? CategoriaId { get; set; }

        public int? Stock { get; set; }

        public bool? EstaActivo { get; set; }

        [JsonIgnore]
        [ForeignKey("CategoriaId")]
        public virtual Categoria Categoria { get; set; }
        [JsonIgnore]
        public virtual MenuItem MenuItem { get; set; }
    }
}
