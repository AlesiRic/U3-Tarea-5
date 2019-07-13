const access_token = 'EAAGvbFeKWf8BAPysxV02T4CV6zKZBZBREOjKfoD684427dMMVhZBoeoxFrRiHYkUxQ6YmefxGi915i01WUQisPkVZCtzgIVOKUrYtrfmIZBgDDALsY3266ZCNZAMGVEfIVvVI4I6TWe2i7rNaO3OTdZBmZAWlN8hyKDR2HcrXZCZBPLfD5MOSUmG1aT';

var FB=require('fb');

FB.setAccessToken(access_token);
 
var body = 'My first post using facebook-node-sdk';
FB.api('me/feed', 'post', { message: body }, function (res) {
  if(!res || res.error) {
    console.log(!res ? 'error occurred' : res.error);
    return;
  }
  console.log('Post Id: ' + res.id);
});