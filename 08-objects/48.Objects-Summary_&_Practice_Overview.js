//cards.html

cards
Array[5000][0 … 99]0: Objectrank: "six"suit: "clubs"__proto__: Object1: Object2: Object3: Object4: Object5: Object6: Object7: Object8: Object9: Object10: Object11: Object12: Object13: Object14: Object15: Object16: Object17: Object18: Object19: Object20: Object21: Object22: Object23: Object24: Object25: Object26: Object27: Object28: Object29: Object30: Object31: Object32: Object33: Object34: Object35: Object36: Object37: Object38: Object39: Object40: Object41: Object42: Object43: Object44: Object45: Object46: Object47: Object48: Object49: Object50: Object51: Object52: Object53: Object54: Object55: Object56: Object57: Object58: Object59: Object60: Object61: Object62: Object63: Object64: Object65: Object66: Object67: Object68: Object69: Object70: Object71: Object72: Object73: Object74: Object75: Object76: Object77: Object78: Object79: Object80: Object81: Object82: Object83: Object84: Object85: Object86: Object87: Object88: Object89: Object90: Object91: Object92: Object93: Object94: Object95: Object96: Object97: Object98: Object99: Object[100 … 199][200 … 299][300 … 399][400 … 499][500 … 599][600 … 699][700 … 799][800 … 899][900 … 999][1000 … 1099][1100 … 1199][1200 … 1299][1300 … 1399][1400 … 1499][1500 … 1599][1600 … 1699][1700 … 1799][1800 … 1899][1900 … 1999][2000 … 2099][2100 … 2199][2200 … 2299][2300 … 2399][2400 … 2499][2500 … 2599][2600 … 2699][2700 … 2799][2800 … 2899][2900 … 2999][3000 … 3099][3100 … 3199][3200 … 3299][3300 … 3399][3400 … 3499][3500 … 3599][3600 … 3699][3700 … 3799][3800 … 3899][3900 … 3999][4000 … 4099][4100 … 4199][4200 … 4299][4300 … 4399][4400 … 4499][4500 … 4599][4600 … 4699][4700 … 4799][4800 … 4899][4900 … 4999]length: 5000__proto__: Array[0]
cards[0]
Object {suit: "clubs", rank: "six"}
cards[1]
Object {suit: "diamonds", rank: "jack"}
cards.filter(function(card){})
[]
cards.filter(function(card){
  return card.rank === "clubs";
})
[]
cards.filter(function(card){
  return card.suit === "clubs";
})
Array[1238]
cards.filter(function(card){
  return card.suit === "clubs";
}).length
1238

// twets.html

tweets
Array[500][0 … 99][100 … 199][200 … 299][300 … 399][400 … 499]length: 500__proto__: Array[0]
tweets[0]
Object {created_at: "Sun Oct 26 19:40:23 +0000 2014", id: 526458338410647550, id_str: "526458338410647553", text: "YouÃ¯Â¿Â½re a thief that stole my heart.", source: "<a href="http://ubersocial.com" rel="nofollow">UberSocial for BlackBerry</a>"…}
Object.keys(tweets[0]);
["created_at", "id", "id_str", "text", "source", "truncated", "in_reply_to_status_id", "in_reply_to_status_id_str", "in_reply_to_user_id", "in_reply_to_user_id_str", "in_reply_to_screen_name", "user", "geo", "coordinates", "place", "contributors", "retweet_count", "favorite_count", "entities", "favorited", "retweeted", "possibly_sensitive", "filter_level", "lang", "timestamp_ms"]
Object.keys(tweets[0].user);
["id", "id_str", "name", "screen_name", "location", "url", "description", "protected", "verified", "followers_count", "friends_count", "listed_count", "favourites_count", "statuses_count", "created_at", "utc_offset", "time_zone", "geo_enabled", "lang", "contributors_enabled", "is_translator", "profile_background_color", "profile_background_image_url", "profile_background_image_url_https", "profile_background_tile", "profile_link_color", "profile_sidebar_border_color", "profile_sidebar_fill_color", "profile_text_color", "profile_use_background_image", "profile_image_url", "profile_image_url_https", "profile_banner_url", "default_profile", "default_profile_image", "following", "follow_request_sent", "notifications"]
