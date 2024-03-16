const router= (server, url, dir) =>{
   
    return server.use(url, dir)
}

module.exports = router;