'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "35330bcc6c907952cb58b1c14742c07f",
".git/config": "c8ba40e89c86f701854ab821adca4e90",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "cd4f371b022beb6d24a12fb919056fb1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "efe5e72f06bad41d85c7b4611e9a849e",
".git/logs/refs/heads/master": "efe5e72f06bad41d85c7b4611e9a849e",
".git/logs/refs/remotes/origin/master": "f685774b8fd3a8c13c85c93da096ab58",
".git/objects/03/4d56c9b8e39caadaecca5e169720bf277def3a": "8a9a21041b59d9aa80d3dbc0beaaa13e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/03753aeff55183701dd469db2b89d746f7adeb": "21c400e98496006497e38b16a5aac73a",
".git/objects/10/1e994872014f3692db7d3d91c59833b4cab498": "81a962e0d4a449bac70f71e84e43cb7b",
".git/objects/19/ee04d0dceef0362f88f4e4eccce87ef89cd790": "8c6e5f13966204bfea6763a902e50f14",
".git/objects/21/d3bea3232b967baf1a223e04104d25a551a8eb": "cd6b9ef071aff679cdfaf100f2b25370",
".git/objects/25/4767284a5f554d083ae7d6c3c4491b48a616d5": "782f8bcf6a1ca683803bf74efe1d7d44",
".git/objects/29/808f5f47d06fe76a12d8df4aba08dcbf390c45": "a6f0b6e334d586376bc5930347814990",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/f6169e46ea4fe442fdcd8b6cd680ca4d07b91c": "11be60ba6232dcd5ba761299d9be573d",
".git/objects/34/57285429e1198d91ef9e184601eb829b4170fe": "670ee91adfba9ba41ded6d824fc92c59",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/38/6300a99e712cb935944839adf4190b8ad5283d": "7046b8c03f4a50ebd4355db8d1b7f26a",
".git/objects/39/069a138eb4829f17a2a8e7cab30049d397fbb0": "f2a34fa869a0747a2fd5bdbe9250a46c",
".git/objects/3f/6345c0ffa45da082e0494a06ac4f96002e9db5": "31a40fd178d034fe2960bb557dcf271f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/2e9a5a98b416c8f0eed84322cec4c79a38cdf3": "15f8389e07f5645367e93c066f9b73cc",
".git/objects/4b/cab4ed684be9c1016f15941635eaebca9da827": "0ac62817afb038639c236e7d0bae3c0f",
".git/objects/4c/3dcdc6e052ab477c30ab5886fe218df494c310": "36b51a501165946dc72b0d603b145780",
".git/objects/4c/af8d72c4eb61f39fc62f5558d03ea8dfb06c87": "d63f79b717d45867696d8e65e91d185d",
".git/objects/4f/dfae32bdc82833f401d77092c2d2ca3a770f03": "e928804afe7984733934c20c057706fa",
".git/objects/5e/ce35e25efef80a786c00bdefea3fe1ad2fee2c": "7111b540b430b77c7e30ea2c333a571d",
".git/objects/63/622ac2487dea36ce99a3cf5b39da5aafd3ed08": "e1b1ded0d8bdc669a65e811cc16f38f5",
".git/objects/6f/62eb5dc5fbd928acb580211729820a477d04ec": "1959f68cfe4001eff86538b08db14ed7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/524547b029d43b1a83bd08663fb9745340c251": "21bc4e0e03dc5642a14e827f99297142",
".git/objects/84/5767c3f63e645456224947a9593eb520455bcb": "d0691cbc3fda506a697e598236a66455",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/b62c5a2659a8be60c7dc98aedf661441a15bc3": "4650c324cdb4524b3d075982fa502090",
".git/objects/8f/0abfefe7843fff0439b5c28238d0e10e7f1f57": "4c89edf1b41bf1bf653b805980e9a849",
".git/objects/90/56de552f04a291628e973cc4c483f9b2df583e": "024198196c3d523a8b03f7d19a712a8a",
".git/objects/90/c93e75f9dbb73853c28efc6ce0d7b462ec01b8": "13d1b2159444921465958f7cba9086be",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/93/a41b171f3f2201b2b73452a1a57c75be7891c6": "98255b05c88165987913a5b0f8426285",
".git/objects/96/408df5dd3b0bde74c9dfac3aa10fe18d6cf962": "339d851f933511e4d25ffd047d69e9bd",
".git/objects/99/40feb9b0b0d76115ba7f37b3e4521ad5c0cefd": "a6b8ac63f1b03cde7660d4585e01e7d7",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9f/c91ce61884bcb83862e02b68cc81faf62c5ccb": "9eaa1648444e8e6e2de59d4b6889f727",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/9267ae53b562134c56353a1eff392b5b64caa2": "38a181f533ab4c67f11ca3f8223a2b6a",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/f067a2b6e638eb3a2f01cce5b35e1f6a60dd5d": "1424d699eaae0efa72f5bec11386a825",
".git/objects/ad/1b4986489866187777ffd0639cbcb3db273867": "7a70b417643a57df5921ebeb821ce035",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/ad/daf144065f998f84a1e5789d8d5f01b1c13830": "3aada28e703e6c6560402ea30980c90b",
".git/objects/b0/b047331dd8453a4be537e82fb1a60fc5dc67b0": "d45f3e562ddb1c168012e37f131b5f4e",
".git/objects/b5/35ff7f6741393f8b28edafb163a01c58e30563": "6d17ac9c0a2c615c16195daac4bbca70",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/16783935e2929fdeac46f4135327a2eb3cb3fe": "554ebe2b499e727c2a05bbcfdbd7abd6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/e16ac6d274c76082f93f376ed17852ce28f502": "8ef123c01321b1093a3f4f9b341056f8",
".git/objects/bd/a76073f5d1fc91ba8800d8d8c60b55ef22fe7d": "4528c632e94513b201ca2fec692415f1",
".git/objects/be/c3474238884f9e02fa76eec6e4d2c09ce754d8": "54f514bdeca1214171c06818b9e57ec0",
".git/objects/c2/77b15f6388ae18566eaa4891d0538e6054b4e3": "ab1195898e95a4a446efa6bd51ebd1d9",
".git/objects/c5/d963c9825ac899ed33bce1b554006f651fc191": "9d769b3354b3134a784ec54589534662",
".git/objects/d6/2a5945caeb5c170b44481269afb64b2375568b": "8e0c6ed648f42bcac3361cd71babffd1",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/1929accd44a9c2c0ea093e7ba426386e735263": "93e831cc201470d64716f247be372d90",
".git/objects/d8/cb0014e6f488bfee4df9fe8262fdce2429d21a": "2f12c4733d1ba2aecb48c695ef17b46f",
".git/objects/e2/3a38cdede8c2251ebffcc835b4fd8eaa77c8be": "e9e446557f548aca968e932237ef7e85",
".git/objects/e4/8d8172a82c3c2a3162fac09fdbe7e80fe943d8": "c275afb2f29b2a3c406a8359dcf6935f",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/7eac2b51072d5d22a69e50301eef981e9789e0": "8a956808610b13526c6441ffa0674b34",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f8/02023cdf958cd1dd3b21fae1550eaeb2940df5": "80fee700bdfa9d2b77cd2287bec84e81",
".git/objects/fc/23993f75a870ad29642c37be78a489fc1cb6d7": "d58dadf4a0f88721feac7e76d87dffee",
".git/objects/fd/521cf84c33a9adcc097d558e5d93c8edc57d89": "788f83f79f6f5489a702a826c4bd42fd",
".git/objects/ff/eee264049b1d1376d6f6de6b76077bac79baa0": "577c415f0e723b1916345a77e7c121bc",
".git/refs/heads/master": "df4cf777ba80be6c800392529d55d807",
".git/refs/remotes/origin/master": "df4cf777ba80be6c800392529d55d807",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/giphy.gif": "cb8365b2a50eb79473f5285877f80b0c",
"assets/loading.gif": "cb8365b2a50eb79473f5285877f80b0c",
"assets/NOTICES": "a4958240aa9035be1d32d5e6318c49fd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "eb311a3e3ba21ce2f38ccc978630ce6a",
"/": "eb311a3e3ba21ce2f38ccc978630ce6a",
"main.dart.js": "8d9976ae53f3295c7ac49f20655b7c66",
"manifest.json": "8991692babc2291b8b8a3a2c3241e665",
"version.json": "712b7b88c1d6877641a0a502506b8577"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
