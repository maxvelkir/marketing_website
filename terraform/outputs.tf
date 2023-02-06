output "droplet_ip_1" {
  value = digitalocean_droplet.www-1.ipv4_address
}

output "droplet_ip_2" {
  value = digitalocean_droplet.www-2.ipv4_address
}
