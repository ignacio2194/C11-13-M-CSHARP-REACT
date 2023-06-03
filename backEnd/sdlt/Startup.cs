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
            MercadoPagoConfig.AccessToken = "APP_USR-8745031599738171-050420-a875df2284d8db5126ed35ac2e7f38d7-57697661";

            ConfigureAuth(app);
        }
    }
}
