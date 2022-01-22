var TEA = {};
   /**
     * TEA encrypt
     * @param v 64bits
     * @param k 128bits
     */
TEA.TEAencrypt = function (v, k) {
  var v0=v[0], v1=v[1], sum=0,           /* set up */
  delta=0x9e3779b9,                     /* a key schedule constant */
  k0=k[0], k1=k[1], k2=k[2], k3=k[3];   /* cache key */
  for (var i=0; i < 32; i++) {                       /* basic cycle start */
    sum += delta;
    v0 += ((v1<<4) + k0) ^ (v1 + sum) ^ ((v1>>5) + k1);
    v1 += ((v0<<4) + k2) ^ (v0 + sum) ^ ((v0>>5) + k3);
  }                                              /* end cycle */
  v[0]=v0; v[1]=v1;
  return v;
}

   /**
     * TEA decrypt
     * @param v 64bits
     * @param k 128bits
     */
TEA.TEAdecrypt = function (v, k) {
  var v0=v[0], v1=v[1], sum=0xC6EF3720,  /* set up */
  delta=0x9e3779b9,                     /* a key schedule constant */
  k0=k[0], k1=k[1], k2=k[2], k3=k[3];   /* cache key */
  for (var i=0; i<32; i++) {                         /* basic cycle start */
    v1 -= ((v0<<4) + k2) ^ (v0 + sum) ^ ((v0>>5) + k3);
    v0 -= ((v1<<4) + k0) ^ (v1 + sum) ^ ((v1>>5) + k1);
    sum -= delta;
  }                                              /* end cycle */
  v[0]=v0; v[1]=v1;
  return v;
}
// var x=TEA.TEAencrypt([65,65],[65,65,65,65]);
// console.log(x);
// alert(TEA.TEAdecrypt(x,[65,65,65,65]));
