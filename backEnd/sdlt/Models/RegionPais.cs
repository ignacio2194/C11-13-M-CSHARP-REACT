namespace sdlt.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class RegionPais
    {
        public int RegionPaisId { get; set; }

        [Required]
        [StringLength(75)]
        public string Descripcion { get; set; }
    }
}
