# Unhandled Promise Rejection in Node.js Server

This repository demonstrates a common error in Node.js where an unhandled promise rejection within an asynchronous operation causes the server to crash. The `bug.js` file contains the problematic code, while `bugSolution.js` provides a corrected version with proper error handling.

## Problem

The server in `bug.js` uses an async function that can throw an error. However, there's no `catch` block to handle the error within the `http.createServer` callback, resulting in an unhandled promise rejection and server termination.

## Solution

The `bugSolution.js` file shows how to correctly handle the potential error using a `catch` block. The solution uses `try...catch` within the async function to handle synchronous errors and `.catch` to handle asynchronous errors.