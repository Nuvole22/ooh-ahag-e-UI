import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import Poster from "./Poster";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, View } from "react-native";

const WholeContainer = styled.View`
  padding-left: 5%;
  padding-right: 5%;
`;
const TxtNickname = styled.Text`
  font-size: 14px;
`;
const TxtContents = styled.Text`
  font-size: 18px;
`;
const BtnLike = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
  /* justify-content: space-between; */
`;

const Comment = ({ title, overview, fullData, like, liked }) => {
  const [isLiked, setIsLiked] = useState(liked);

  const onLikeTouched = () => {
    setIsLiked(!isLiked);
  };
  return (
    <WholeContainer>
      <TxtNickname>{title}</TxtNickname>
      <TxtContents>{overview}</TxtContents>
      <BtnLike onPress={onLikeTouched}>
        {isLiked ? (
          <Ionicons name="heart" size={14} color="black" />
        ) : (
          <Ionicons name="heart-outline" size={14} color="black" />
        )}
        <Text>{isLiked ? like + 1 : like}</Text>
      </BtnLike>
    </WholeContainer>
  );
};

export default Comment;
