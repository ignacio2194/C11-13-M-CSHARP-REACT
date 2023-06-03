using MercadoPago.Client.Preference;
using MercadoPago.Config;
using MercadoPago.Resource.Preference;
using Microsoft.Owin;
using Owin;
using System.Collections.Generic;

[assembly: OwinStartup(typeof(sdlt.Startup))]

namespace sdlt
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            MercadoPagoConfig.AccessToken = "TEST-8745031599738171-050420-9199ef6aa7d3367a72271aec715b20df-57697661";
            ConfigureAuth(app);
        }
    }
}
