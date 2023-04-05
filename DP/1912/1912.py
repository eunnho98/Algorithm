n = int(input())
arr = list(map(int, input().split()))
dp = [0] * n # i번째까지 고려했을 때 연속 합의 최대
dp[0] = arr[0]
for i in range(1, n):
    dp[i] = max(arr[i], dp[i-1]+arr[i]) 
print(max(dp))