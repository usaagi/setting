/*
user_pref("browser.cache.disk.capacity", 312000);
user_pref("browser.cache.disk.parent_directory", "R:\\Temp");
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.cache.disk.smart_size.first_run", false);
user_pref("browser.cache.disk.smart_size_cached_value", 1024000);
user_pref("browser.cache.memory.capacity", 65536);
user_pref("browser.download.dir", "R:\\Downloads");           // download directroy
*/
user_pref("browser.cache.disk.parent_directory", "R:\\Temp"); // cache directroy
user_pref("browser.fixup.alternate.enabled", false);  // www補完を停止
user_pref("browser.search.openintab", true);          // 検索を新しいタブで開く
user_pref("network.dns.disablePrefetch", true);		    // ページに含まれる未クリックのリンク先のDNS解決をバックグラウンドで行う機能の停止				  
user_pref("network.prefetch-next", false);				    // サイトが指定したリンクの先読みを行う

// 統計とか余計なファイルが作られないようにする?
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);


// --- extensions ---

// tab center
user_pref("extensions.verticaltabs.largetabs", 0)       // disable thumbnail

user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);	// ピン留めしたタブも選択してから読み込む

