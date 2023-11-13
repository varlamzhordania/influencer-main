import dayjs from "dayjs";
import { db } from "../config/firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";

const addPayment = async (plan, userId) => {
  console.log("adding payment", { ...plan, userId });
  const duration = plan?.duration;
  let expiryDate = null;
  const purchaseDate = dayjs().toDate();
  if (duration === "Monthly") {
    expiryDate = dayjs().add(1, "month").toDate();
  } else if (duration === "Yearly") {
    expiryDate = dayjs().add(1, "year").toDate();
  }
  const ref = doc(db, "payments", plan?.sessionId);
  await setDoc(
    ref,
    {
      plan: plan?.name,
      duration: plan?.duration,
      desc: plan?.desc,
      purchaseDate,
      expiryDate,
      userId,
      status: "unpaid",
      amount: Number(plan?.price),
      purpose: "Purchased Plan",
      influencerSelection: 30,
      influencerProfileAnalysis: 30,
      monitorPosts: 3,
      campaignUsage: 0,
    },
    { merge: true }
  );
  return userId;
};

const updatePaymentStatus = async (sessionId) => {
  const ref = doc(db, "payments", sessionId);
  await setDoc(ref, { status: "paid" }, { merge: true });
  return sessionId;
};

const getUserPayments = async (userId) => {
  const ref = collection(db, "payments");
  const q = query(ref, where("userId", "==", userId));
  const res = await getDocs(q);
  const data = [];
  res.docs.forEach((e) => {
    data?.push({
      ...e.data(),
      id: e?.id,
      expiryDate: e?.data()?.expiryDate?.toDate(),
      purchaseDate: e?.data()?.purchaseDate?.toDate(),
    });
  });
  return data;
};

const getPlans = async () => {
  const ref = collection(db, "plans");
  const res = await getDocs(ref);
  let docs = [];
  res.docs.forEach((doc) => {
    docs.push({
      ...doc.data(),
      id: doc.id,
    });
  });
  return docs;
};

const getUserPlan = async (userId) => {
  console.log("user id", userId);
  const ref = collection(db, "payments");
  let q = query(ref, where("userId", "==", userId));
  q = query(q, where("status", "==", "paid"));
  const res = await getDocs(q);

  if (!res.empty) {
    const data = {
      ...res.docs[0]?.data(),
      id: res.docs[0]?.id,
      expiryDate: res.docs[0]?.data()?.expiryDate?.toDate(),
      purchaseDate: res.docs[0]?.data()?.purchaseDate?.toDate(),
    };
    return data;
  } else {
    return null;
  }
};

const paymentApi = {
  addPayment,
  updatePaymentStatus,
  getUserPayments,
  getPlans,
  getUserPlan
};

export default paymentApi;
