namespace sdlt.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("OrdenDelivery")]
    public partial class OrdenDelivery
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public OrdenDelivery()
        {
            DetalleOrdenDelivery = new HashSet<DetalleOrdenDelivery>();
        }

        [Key]
        public int OrdenId { get; set; }

        public int? NroOrden { get; set; }

        [Column(TypeName = "date")]
        public DateTime? Fecha { get; set; }

        [StringLength(128)]
        public string ClienteId { get; set; }

        public int? RestauranteId { get; set; }

        public virtual User AspNetUsers { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DetalleOrdenDelivery> DetalleOrdenDelivery { get; set; }
    }
}
