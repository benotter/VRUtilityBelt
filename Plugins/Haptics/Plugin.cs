﻿using CefSharp.OffScreen;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VRUB.Addons;
using VRUB.Addons.Overlays;
using VRUB.API;
using VRUB.Bridge;

namespace Haptics
{
    public class Plugin : IPlugin
    {
        Addon _owner;

        public override void OnLoad(AddonManager manager, Addon owner)
        {
            _owner = owner;

            BridgeHandler.RegisterGlobalLink("VRUB_Core_Haptics", HapticAPI.Instance);
        }

        public override void OnBrowserNavigation(Addon parentAddon, Overlay overlay, ChromiumWebBrowser browser)
        {
            overlay.InjectJsFile("plugin://" + _owner.Key + "_Haptics/haptics.js");
        }
    }
}