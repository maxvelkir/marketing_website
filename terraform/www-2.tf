resource "digitalocean_droplet" "www-2" {
  image  = "ubuntu-20-04-x64"
  name   = "www-2"
  region = "nyc3"
  size   = "s-1vcpu-1gb"
  ssh_keys = [
    digitalocean_ssh_key.default.fingerprint
  ]
}
