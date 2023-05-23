namespace sdlt.Models
{
    using Newtonsoft.Json;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("MenuItem")]
    public partial class MenuItem
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MenuItem()
        {
            DetalleOrdenDelivery = new HashSet<DetalleOrdenDelivery>();
        }

        public int MenuItemId { get; set; }

        [StringLength(200)]
        public string Descripcion { get; set; }

        public bool? EsBebida { get; set; }

        public bool? EsComida { get; set; }

        public bool? EstaActivo { get; set; }

        [JsonIgnore]
        public virtual Bebida Bebida { get; set; }
        [JsonIgnore]
        public virtual Comida Comida { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        [JsonIgnore]
        public virtual ICollection<DetalleOrdenDelivery> DetalleOrdenDelivery { get; set; }
    }
}
