Build an Image Search Abstraction Layer
=================

Objective: Build a full stack JavaScript app that allows you to search for images like this: https://whispering-goat.glitch.me/api/imagesearch/lolcats%20funny?offset=10 and browse recent search queries like this: https://whispering-goat.glitch.me/api/imagesearch/lolcats%20funny?offset=10
User Story: I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
User Story: I can paginate through the responses by adding a ?offset=2 parameter to the URL.
User Story: I can get a list of the most recently submitted search strings.


Example search output
------------

```
{ "url": "https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc5MTQwfQ", "description": "Workplace in my office with coffee", "alt_description": "coffee latte near white wireless keyboard and Apple EarPods on the table photography", "thumbnail": "https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjc5MTQwfQ", "user": "goumbik" }
```

Example saved search terms
-------------------

```
{
"term": "cats",
"when": "2019-06-29T15:07:25.432Z"
}
```
