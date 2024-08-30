import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { AuthUser, getCurrentUser } from "aws-amplify/auth";
import { Hub } from "@aws-amplify/core";
import { useRouter } from "expo-router";
type Props = {};

const index = (props: Props) => {
  const [customState, setCustomState] = useState<string | null>(null);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [authError, setauthError] = useState<unknown>(null);
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = Hub.listen("auth", ({ payload }) => {
      switch (payload.event) {
        case "signInWithRedirect":
          getUser();
          break;
        case "signInWithRedirect_failure":
          setauthError("An error has occurred during the OAuth flow.");
          break;
        case "customOAuthState":
          setCustomState(payload.data); // this is the customState provided on signInWithRedirect function
          break;
      }
    });

    getUser();

    return unsubscribe;
  }, []);

  const getUser = async (): Promise<void> => {
    try {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
      if (currentUser.signInDetails !== null) {
        router.navigate("(tabs)");
      } else {
        router.navigate("Landing");
      }
    } catch (error) {
      console.log(error);
      router.navigate("Landing");
      console.log("---------Not signed in-----------");
    }
  };

  return (
    <View>
      <Text>index</Text>
      <Button title="sign in" />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
