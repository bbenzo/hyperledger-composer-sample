# Hyperledger Composer Sample

A simple card trading network

### Documentation

Hyperledger Composer tutorial: https://hyperledger.github.io/composer/latest/tutorials/developer-tutorial


### Getting Started

Execute these within the project root folder

* Create archive `composer archive create -t dir -n .`
* Install network `composer network install --card PeerAdmin@hlfv1 --archiveFile tutorial-network@0.0.1.bna`
* Start network `composer network start --networkName tutorial-network --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card`
* Import network admin identity as a usable network card `composer card import --file networkadmin.card`