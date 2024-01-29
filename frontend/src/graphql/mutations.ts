/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    sub
    type
    Regions {
      items {
        id
        name
        banner
        bio
        owner
        createdAt
        updatedAt
        userRegionsId
        __typename
      }
      nextToken
      __typename
    }
    Reservation {
      id
      dateStart
      dateEnd
      Field {
        id
        name
        address
        regionID
        owner
        createdAt
        updatedAt
        __typename
      }
      User {
        id
        sub
        type
        bio
        owner
        createdAt
        updatedAt
        userReservationId
        __typename
      }
      owner
      createdAt
      updatedAt
      reservationFieldId
      reservationUserId
      __typename
    }
    bio
    owner
    createdAt
    updatedAt
    userReservationId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    sub
    type
    Regions {
      items {
        id
        name
        banner
        bio
        owner
        createdAt
        updatedAt
        userRegionsId
        __typename
      }
      nextToken
      __typename
    }
    Reservation {
      id
      dateStart
      dateEnd
      Field {
        id
        name
        address
        regionID
        owner
        createdAt
        updatedAt
        __typename
      }
      User {
        id
        sub
        type
        bio
        owner
        createdAt
        updatedAt
        userReservationId
        __typename
      }
      owner
      createdAt
      updatedAt
      reservationFieldId
      reservationUserId
      __typename
    }
    bio
    owner
    createdAt
    updatedAt
    userReservationId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    sub
    type
    Regions {
      items {
        id
        name
        banner
        bio
        owner
        createdAt
        updatedAt
        userRegionsId
        __typename
      }
      nextToken
      __typename
    }
    Reservation {
      id
      dateStart
      dateEnd
      Field {
        id
        name
        address
        regionID
        owner
        createdAt
        updatedAt
        __typename
      }
      User {
        id
        sub
        type
        bio
        owner
        createdAt
        updatedAt
        userReservationId
        __typename
      }
      owner
      createdAt
      updatedAt
      reservationFieldId
      reservationUserId
      __typename
    }
    bio
    owner
    createdAt
    updatedAt
    userReservationId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createReservation = /* GraphQL */ `mutation CreateReservation(
  $input: CreateReservationInput!
  $condition: ModelReservationConditionInput
) {
  createReservation(input: $input, condition: $condition) {
    id
    dateStart
    dateEnd
    Field {
      id
      name
      address
      regionID
      owner
      createdAt
      updatedAt
      __typename
    }
    User {
      id
      sub
      type
      Regions {
        nextToken
        __typename
      }
      Reservation {
        id
        dateStart
        dateEnd
        owner
        createdAt
        updatedAt
        reservationFieldId
        reservationUserId
        __typename
      }
      bio
      owner
      createdAt
      updatedAt
      userReservationId
      __typename
    }
    owner
    createdAt
    updatedAt
    reservationFieldId
    reservationUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateReservationMutationVariables,
  APITypes.CreateReservationMutation
>;
export const updateReservation = /* GraphQL */ `mutation UpdateReservation(
  $input: UpdateReservationInput!
  $condition: ModelReservationConditionInput
) {
  updateReservation(input: $input, condition: $condition) {
    id
    dateStart
    dateEnd
    Field {
      id
      name
      address
      regionID
      owner
      createdAt
      updatedAt
      __typename
    }
    User {
      id
      sub
      type
      Regions {
        nextToken
        __typename
      }
      Reservation {
        id
        dateStart
        dateEnd
        owner
        createdAt
        updatedAt
        reservationFieldId
        reservationUserId
        __typename
      }
      bio
      owner
      createdAt
      updatedAt
      userReservationId
      __typename
    }
    owner
    createdAt
    updatedAt
    reservationFieldId
    reservationUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateReservationMutationVariables,
  APITypes.UpdateReservationMutation
>;
export const deleteReservation = /* GraphQL */ `mutation DeleteReservation(
  $input: DeleteReservationInput!
  $condition: ModelReservationConditionInput
) {
  deleteReservation(input: $input, condition: $condition) {
    id
    dateStart
    dateEnd
    Field {
      id
      name
      address
      regionID
      owner
      createdAt
      updatedAt
      __typename
    }
    User {
      id
      sub
      type
      Regions {
        nextToken
        __typename
      }
      Reservation {
        id
        dateStart
        dateEnd
        owner
        createdAt
        updatedAt
        reservationFieldId
        reservationUserId
        __typename
      }
      bio
      owner
      createdAt
      updatedAt
      userReservationId
      __typename
    }
    owner
    createdAt
    updatedAt
    reservationFieldId
    reservationUserId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteReservationMutationVariables,
  APITypes.DeleteReservationMutation
>;
export const createField = /* GraphQL */ `mutation CreateField(
  $input: CreateFieldInput!
  $condition: ModelFieldConditionInput
) {
  createField(input: $input, condition: $condition) {
    id
    name
    address
    regionID
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFieldMutationVariables,
  APITypes.CreateFieldMutation
>;
export const updateField = /* GraphQL */ `mutation UpdateField(
  $input: UpdateFieldInput!
  $condition: ModelFieldConditionInput
) {
  updateField(input: $input, condition: $condition) {
    id
    name
    address
    regionID
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFieldMutationVariables,
  APITypes.UpdateFieldMutation
>;
export const deleteField = /* GraphQL */ `mutation DeleteField(
  $input: DeleteFieldInput!
  $condition: ModelFieldConditionInput
) {
  deleteField(input: $input, condition: $condition) {
    id
    name
    address
    regionID
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFieldMutationVariables,
  APITypes.DeleteFieldMutation
>;
export const createRegion = /* GraphQL */ `mutation CreateRegion(
  $input: CreateRegionInput!
  $condition: ModelRegionConditionInput
) {
  createRegion(input: $input, condition: $condition) {
    id
    name
    banner
    bio
    Fields {
      items {
        id
        name
        address
        regionID
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    user {
      id
      sub
      type
      Regions {
        nextToken
        __typename
      }
      Reservation {
        id
        dateStart
        dateEnd
        owner
        createdAt
        updatedAt
        reservationFieldId
        reservationUserId
        __typename
      }
      bio
      owner
      createdAt
      updatedAt
      userReservationId
      __typename
    }
    owner
    createdAt
    updatedAt
    userRegionsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRegionMutationVariables,
  APITypes.CreateRegionMutation
>;
export const updateRegion = /* GraphQL */ `mutation UpdateRegion(
  $input: UpdateRegionInput!
  $condition: ModelRegionConditionInput
) {
  updateRegion(input: $input, condition: $condition) {
    id
    name
    banner
    bio
    Fields {
      items {
        id
        name
        address
        regionID
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    user {
      id
      sub
      type
      Regions {
        nextToken
        __typename
      }
      Reservation {
        id
        dateStart
        dateEnd
        owner
        createdAt
        updatedAt
        reservationFieldId
        reservationUserId
        __typename
      }
      bio
      owner
      createdAt
      updatedAt
      userReservationId
      __typename
    }
    owner
    createdAt
    updatedAt
    userRegionsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRegionMutationVariables,
  APITypes.UpdateRegionMutation
>;
export const deleteRegion = /* GraphQL */ `mutation DeleteRegion(
  $input: DeleteRegionInput!
  $condition: ModelRegionConditionInput
) {
  deleteRegion(input: $input, condition: $condition) {
    id
    name
    banner
    bio
    Fields {
      items {
        id
        name
        address
        regionID
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    user {
      id
      sub
      type
      Regions {
        nextToken
        __typename
      }
      Reservation {
        id
        dateStart
        dateEnd
        owner
        createdAt
        updatedAt
        reservationFieldId
        reservationUserId
        __typename
      }
      bio
      owner
      createdAt
      updatedAt
      userReservationId
      __typename
    }
    owner
    createdAt
    updatedAt
    userRegionsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRegionMutationVariables,
  APITypes.DeleteRegionMutation
>;
