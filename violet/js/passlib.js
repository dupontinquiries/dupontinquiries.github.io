var PassLib = {};

PassLib.password_length = 55;
// was 30 (69^30 approx. eq. 1.4e55 combos)
// this means that if you can try 1trillion ops per second, it would take 4e34 centuries to guess all of them
// at 55, this now takes 4.3e80 centuries
// will have to verify the above statement as it was just napkin math
