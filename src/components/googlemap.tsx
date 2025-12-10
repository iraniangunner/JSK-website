// "use client";
// import React, { useEffect, useRef } from "react";
// import { Loader } from "@googlemaps/js-api-loader";

// export  function Map() {
//   const mapRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const initMap = async () => {
//       const loader = new Loader({
//         apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
//         version: "weekly",
//       });

//       const { Map } = await loader.importLibrary("maps");

//       const { Marker } = (await loader.importLibrary(
//         "marker"
//       )) as google.maps.MarkerLibrary;

//       const position = {
//         lat: 35.75547446326668,
//         lng: 51.40515220751757,
//       };

//       const mapOptions: google.maps.MapOptions = {
//         center: position,
//         zoom: 17,
//         mapId: "MY_NEXTJS_MAPID",
//         //  clickableIcons:true
//       };

//       const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
//       const marker = new Marker({
//         map: map,
//         position: position,
//       });
//     };
//     initMap();
//   }, []);
//   return <div className="h-full" ref={mapRef}></div>;
// }


"use client";
import React, { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initMap = async () => {
      try {
        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
          version: "weekly",
        });

        const { Map } = await loader.importLibrary("maps");
        const { Marker } = (await loader.importLibrary(
          "marker"
        )) as google.maps.MarkerLibrary;

        const position = {
          lat: 35.75547446326668,
          lng: 51.40515220751757,
        };

        // Light, clean map styles
        const lightMapStyles = [
          {
            featureType: "all",
            elementType: "geometry",
            stylers: [{ saturation: -20 }, { lightness: 5 }],
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{ color: "#e0f0f8" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#d5e8d5" }],
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffffff" }],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#e8e8e8" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{ color: "#f5f5f5" }],
          },
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "transit",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
        ];

        const mapOptions: google.maps.MapOptions = {
          center: position,
          zoom: 16,
          mapId: "MY_NEXTJS_MAPID",
          disableDefaultUI: true,
          zoomControl: true,
          fullscreenControl: true,
          styles: lightMapStyles,
          backgroundColor: "#f9fafb",
        };

        const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

        const marker = new Marker({
          map: map,
          position: position,
          title: "JSK Company",
        });

        setIsLoading(false);
      } catch (err) {
        setError("Failed to load map");
        setIsLoading(false);
      }
    };

    initMap();
  }, []);

  return (
    <div className="relative h-full w-full bg-gray-100">
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 z-10">
          {/* Animated location pulse */}
          <div className="relative">
            <div className="absolute inset-0 w-20 h-20 bg-[#EC9123]/20 rounded-full animate-ping" />
            <div className="relative w-20 h-20 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#EC9123] to-[#d4820f] rounded-full flex items-center justify-center shadow-lg shadow-[#EC9123]/30">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
            </div>
          </div>
          <p className="mt-6 text-gray-600 font-medium">Loading map...</p>
          <div className="mt-4 flex gap-1">
            <span className="w-2 h-2 bg-[#EC9123] rounded-full animate-bounce [animation-delay:-0.3s]" />
            <span className="w-2 h-2 bg-[#EC9123] rounded-full animate-bounce [animation-delay:-0.15s]" />
            <span className="w-2 h-2 bg-[#EC9123] rounded-full animate-bounce" />
          </div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 z-10">
          <div className="w-20 h-20 flex items-center justify-center bg-red-100 rounded-full mb-4">
            <svg
              className="w-10 h-10 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </div>
          <p className="text-gray-900 font-semibold mb-1">Unable to load map</p>
          <p className="text-gray-500 text-sm">Please try again later</p>
        </div>
      )}

      {/* Map Container */}
      <div ref={mapRef} className="h-full w-full" />

      {/* Floating Info Card */}
      <div className="absolute bottom-6 left-6 right-6 sm:left-6 sm:right-auto sm:w-72 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl p-5 z-20 shadow-xl">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#EC9123] to-[#d4820f] rounded-xl shadow-lg shadow-[#EC9123]/25">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-[#2c4050] text-lg">JSK Company</h4>
            <p className="text-gray-500 text-sm mt-0.5">Tehran, Iran</p>

            {/* Actions */}
            <div className="flex items-center gap-4 mt-3">
              <a
                href="https://www.google.com/maps?q=35.75547446326668,51.40515220751757"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 text-sm font-semibold text-[#EC9123] hover:text-[#d4820f] transition-colors"
              >
                <span>Get Directions</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>

              <span className="w-px h-4 bg-gray-200" />

              <button
                onClick={() => {
                  navigator.clipboard.writeText("35.75547446326668, 51.40515220751757");
                }}
                className="text-sm text-gray-500 hover:text-[#2c4050] transition-colors"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Corner gradient overlay */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/50 to-transparent pointer-events-none rounded-tl-3xl z-10" />
    </div>
  );
}