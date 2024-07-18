import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="Login" options={{ headerShown: false }} />
      <Stack.Screen name="CreateAccount" options={{ headerShown: false }} />
      <Stack.Screen name="Email" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="CreateGroup" options={{ headerShown: false }} />
      <Stack.Screen name="CreateGroup2" options={{ headerShown: false }} />
      <Stack.Screen name="CreateGroup3" options={{ headerShown: false }} />
      <Stack.Screen name="CreateEvent" options={{ headerShown: false }} />
      <Stack.Screen name="CreateEvent2" options={{ headerShown: false }} />
      <Stack.Screen name="CreateEvent3" options={{ headerShown: false }} />
      <Stack.Screen name="CreateEvent4" options={{ headerShown: false }} />
      <Stack.Screen name="CreateEvent5" options={{ headerShown: false }} />
      <Stack.Screen name="CreateEvent6" options={{ headerShown: false }} />
      <Stack.Screen name="Preference1" options={{ headerShown: false }} />
      <Stack.Screen name="Preference2" options={{ headerShown: false }} />
      <Stack.Screen name="Preference3" options={{ headerShown: false }} />
      <Stack.Screen name="ReviewEvent" options={{ headerShown: false }} />
      <Stack.Screen name="EventInvite" options={{ headerShown: false }} />
    </Stack>
  );
}
