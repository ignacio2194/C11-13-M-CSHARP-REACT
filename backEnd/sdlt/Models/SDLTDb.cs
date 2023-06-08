using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;

namespace sdlt.Models
{
    public partial class SDLTDb : DbContext
    {
        public SDLTDb()
            : base("name=SDLTDb")
        {
        }

        public virtual DbSet<AspNetUserClaims> AspNetUserClaims { get; set; }
        public virtual DbSet<AspNetUserLogins> AspNetUserLogins { get; set; }
        public virtual DbSet<AspNetUserRoles> AspNetUserRoles { get; set; }
        public virtual DbSet<User> AspNetUsers { get; set; }
        public virtual DbSet<Bebida> Bebida { get; set; }
        public virtual DbSet<Categoria> Categoria { get; set; }
        public virtual DbSet<Comida> Comida { get; set; }
        public virtual DbSet<DetalleOrdenDelivery> DetalleOrdenDelivery { get; set; }
        public virtual DbSet<Evento> Evento { get; set; }
        public virtual DbSet<MenuItem> MenuItem { get; set; }
        public virtual DbSet<OrdenDelivery> OrdenDelivery { get; set; }
        public virtual DbSet<RegionPais> RegionPais { get; set; }
        public virtual DbSet<Reserva> Reserva { get; set; }
        public virtual DbSet<Restaurante> Restaurante { get; set; }
        public virtual DbSet<ReservacionEnEvento> ReservacionEnEvento { get; set; }
        public virtual DbSet<Producto> Producto { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .Property(e => e.Direccion)
                .IsUnicode(false);

            modelBuilder.Entity<User>()
                .Property(e => e.CodigoPostal)
                .IsUnicode(false);

            modelBuilder.Entity<User>()
                .Property(e => e.Reseña)
                .IsUnicode(false);

            // comentable
            //modelBuilder.Entity<User>()
            //    .HasMany(e => e.AspNetUserClaims)
            //    .WithRequired(e => e.AspNetUsers)
            //    .HasForeignKey(e => e.UserId);

            //modelBuilder.Entity<User>()
            //    .HasMany(e => e.AspNetUserLogins)
            //    .WithRequired(e => e.AspNetUsers)
            //    .HasForeignKey(e => e.UserId);

            //modelBuilder.Entity<User>()
            //    .HasMany(e => e.AspNetUserRoles)
            //    .WithRequired(e => e.AspNetUsers)
            //    .HasForeignKey(e => e.UserId);

            modelBuilder.Entity<User>()
                .HasMany(e => e.Reserva)
                .WithOptional(e => e.AspNetUsers)
                .HasForeignKey(e => e.UserId);

            //modelBuilder.Entity<User>()
            //    .HasMany(e => e.OrdenDelivery)
            //    .WithOptional(e => e.AspNetUsers)
            //    .HasForeignKey(e => e.ClienteId);

            modelBuilder.Entity<Bebida>()
                .Property(e => e.Nombre)
                .IsUnicode(false);

            modelBuilder.Entity<Categoria>()
                .Property(e => e.Descripcion)
                .IsUnicode(false);

            modelBuilder.Entity<Comida>()
                .Property(e => e.Nombre)
                .IsUnicode(false);

            modelBuilder.Entity<ReservacionEnEvento>()
               .Property(e => e.Precio)
               .HasColumnType("Decimal");

            modelBuilder.Entity<Evento>()
                .Property(e => e.Nombre)
                .IsUnicode(false);

            modelBuilder.Entity<Evento>()
                .Property(e => e.Descripcion)
                .IsUnicode(false);

            modelBuilder.Entity<Evento>()
                .Property(e => e.ImagenUrl)
                .IsUnicode(false);

            modelBuilder.Entity<MenuItem>()
                .Property(e => e.Descripcion)
                .IsUnicode(false);

            modelBuilder.Entity<MenuItem>()
                .HasOptional(e => e.Bebida)
                .WithRequired(e => e.MenuItem);

            modelBuilder.Entity<MenuItem>()
                .HasOptional(e => e.Comida)
                .WithRequired(e => e.MenuItem);

            //modelBuilder.Entity<MenuItem>()
            //    .HasMany(e => e.DetalleOrdenDelivery)
            //    .WithRequired(e => e.MenuItem)
            //    .WillCascadeOnDelete(false);

            modelBuilder.Entity<OrdenDelivery>()
                .HasMany(e => e.DetalleOrdenDelivery)
                .WithRequired(e => e.OrdenDelivery)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<RegionPais>()
                .Property(e => e.Descripcion)
                .IsUnicode(false);

            modelBuilder.Entity<Restaurante>()
                .Property(e => e.Nombre)
                .IsUnicode(false);

            modelBuilder.Entity<Restaurante>()
                .Property(e => e.Descripcion)
                .IsUnicode(false);

            modelBuilder.Entity<Restaurante>()
                .Property(e => e.Direccion)
                .IsUnicode(false);

            modelBuilder.Entity<Restaurante>()
                .Property(e => e.CodigoPostal)
                .IsUnicode(false);

            modelBuilder.Entity<Restaurante>()
                .Property(e => e.ImagenUrl)
                .IsUnicode(false);
        }
    }
}
