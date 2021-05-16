import { navigate } from "gatsby-link";
import { observer } from "mobx-react-lite";
import LabelingStore  from "../store/LabelingStore";
import UserStore from "../store/UserStore";
let isSSR = typeof window === "undefined";
/**
 * Redirects to a page if the user is already authed
 * @param {to} | WHere to redirect
 */
export const useAuthRedirect = ({ to }) => {
  if (isSSR) return;
  if (UserStore.isLoggedIn && UserStore.identifiedUser) {
    navigate(to);
  }
};
/**
 * Redirects to a page if the user is NOT authed
 * @param {to} | WHere to redirect
 */
export const useAnonRedirect = ({ to }) => {
  if (isSSR) return;
  if (!UserStore.isLoggedIn && UserStore.identifiedUser) {
    navigate(to);
  }
};

export const useLabelingToolNotReadyRedirect = ({ to }) => {
  if (isSSR) return;
  if (!LabelingStore.labelingToolReady) {
    navigate(to);
  }
};
