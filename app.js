const express = require( 'express' );
const app = express();
const server = require( 'http' ).Server( app );
const io = require( 'socket.io' )( server );
const stream = require( './ws/stream' );
const path = require( 'path' );
const port = 3000;
 
app.use( '/assets', express.static( path.join( __dirname, 'assets' ) ) );

app.get( '/', ( req, res ) => {
    res.sendFile( __dirname + '/index.html' );
} );


io.of( '/stream' ).on( 'connection', stream );

//server.listen( 3000 );

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })