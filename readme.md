# Is iframeable

This test if a website has any restriction for the iframe. 


# usage

```
curl 'http://localhost:5000/?url=https://www.decathlon.fr/C-915149-velo-homme
``` 

returns 

```json
{"canBeIframed":false}
```




# dev 

```npm run dev``` ( needs nodemon)

