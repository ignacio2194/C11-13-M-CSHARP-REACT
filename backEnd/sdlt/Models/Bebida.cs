namespace sdlt.Models
{
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Bebida")]
    public partial class Bebida
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int BebidaId { get; set; }

        [StringLength(45)]
        public string Nombre { get; set; }

        public decimal? Precio { get; set; }

        public int? Stock { get; set; }

        public bool? EstaActivo { get; set; }

        [JsonIgnore]
        public virtual MenuItem MenuItem { get; set; }
    }
}
