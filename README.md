# Dailymotion Custom Embed

[![Version](https://badge.fury.io/js/%40dmvs-apac%2Fdm-custom-embed.svg)](https://www.npmjs.com/package/@dmvs-apac/dm-custom-embed)
[![License](https://img.shields.io/github/license/DMVS-APAC/dm-custom-embed)](https://github.com/DMVS-APAC/dm-custom-embed/blob/master/LICENSE)
[![Build Status](https://github.com/DMVS-APAC/dm-custom-embed/workflows/Stage%20Runner/badge.svg)](https://github.com/DMVS-APAC/dm-custom-embed/actions?query=workflow%3A%22Stage+Runner%22)
[![](https://data.jsdelivr.com/v1/package/npm/@dmvs-apac/dm-custom-embed/badge)](https://www.jsdelivr.com/package/npm/@dmvs-apac/dm-custom-embed)

This library is to embed Dailymotion video programmatically. Build using Typescript and much <3

## Quick start

There are 2 options using this library. Download it directly to use on your production environment or use it on your development environment. 

[Download latest release](https://github.com/DMVS-APAC/dm-custom-embed/releases)

Or if you just want to test just use cdn below (again this is only for test purposes)

[dm-custom-embed on jsdelivr](https://cdn.jsdelivr.net/npm/@dmvs-apac/dm-custom-embed/dist/dm-ce.min.js)

## Pre-requisite for Manual build

Make sure you have installed packages below:

1. NPM 
2. Git

## Getting Started

Create a `.env` file contain vars below
```
API_URL=https://your-custom-api-endpoint.com/
```

Start build
```bash
npm install
npm run dev // Build development source
npm run prod // Build production source
npm run deploy // Build both development and production
```




