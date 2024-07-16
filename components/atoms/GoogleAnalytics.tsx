'use client'

import { useEffect } from "react";

const GoogleAnalytics = () => {
  useEffect(() => {
    // Función para cargar el script de Google Analytics
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    // Configuración de Google Analytics
    const trackPageView = () => {
      ga('send', 'pageview');
    };

    // Carga el script de gtag.js
    loadScript('https://www.googletagmanager.com/gtag/js?id=G-1L1M5FQ7ZZ')
      .then(() => {
        // Agrega la función gtag al objeto global
        window['dataLayer'] = window['dataLayer'] || [];
        window['gtag'] = window['gtag'] || function() {
          dataLayer.push(arguments);
        };
        window['ga'] = window['ga'] || function() {
          gtag.apply(this, arguments);
        };
        // Envía una vista de página cuando se carga el script
        trackPageView();
      })
      .catch(console.error);
  }, []);

  return null; // No se muestra nada en la UI
};

export default GoogleAnalytics;