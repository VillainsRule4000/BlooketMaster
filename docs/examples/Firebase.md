# Swapping
so you may have a couple of questions about how swapping works
## Why does swapping not take you gold?
In the Blooket source, it sends the swap request, then gets the other plays gold. Then, it sets your gold to that amount (all client-sided).<br>
So if we just send the first request and don't edit our gold we can swap without the downside of losing gold.

# How do I find the "val" object?
1. Do the action you want to do (Needs to be something like swapping, or setting a players crypto, not client side) example: swapping or hacking a player
2. QUICKLY type `debugger` in the console.
3. Go to the network tab and look at the last request that has the location as `https://fb.blooket.com/c/firebase/games/${gameId}/v`.
4. Copy the payload.
5. Decode the payload with my payload decoder.
6. Figure out what value is what (usually starts with the first letter of the actual value).
7. Forge the request using my example.
