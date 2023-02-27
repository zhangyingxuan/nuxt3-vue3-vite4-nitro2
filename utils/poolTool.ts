// Pooling code

// Define pooling parameters int pool_size = 2; int stride = 2;

// Create a 2D array to store the pooled output int[][] pooled_output = new int[pool_size][pool_size];

// Iterate through the input array for (int i = 0; i < input.length; i += stride) { for (int j = 0; j < input[i].length; j += stride) { // Calculate the maximum value in the pooling window int max_val = Integer.MIN_VALUE; for (int k = 0; k < pool_size; k++) { for (int l = 0; l < pool_size; l++) { max_val = Math.max(max_val, input[i + k][j + l]); } } // Store the maximum value in the pooled output pooled_output[i / stride][j / stride] = max_val; } }