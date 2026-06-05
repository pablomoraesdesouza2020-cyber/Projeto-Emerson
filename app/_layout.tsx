import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Menu Principal' }} />
      <Stack.Screen name="MenuCategorias" options={{ title: 'Categorias' }} />
      <Stack.Screen name="MenuSuspense" options={{ title: 'Suspense' }} />
      <Stack.Screen name="MenuAventura" options={{ title: 'Aventura' }} />
 
      <Stack.Screen name="avatar" options={{ title: 'Avatar' }} />
      <Stack.Screen name="backrooms" options={{ title: 'Backrooms' }} />
      <Stack.Screen name="TDCA" options={{ title: 'Digital Circus' }} />
      <Stack.Screen name="TelePre" options={{ title: 'Telefone Preto 2' }} />
    </Stack>
  );
}