package com.dutchOrder.server.service;

import java.util.List;

import com.dutchOrder.server.model.PaymentInfo;

public interface MwPaymentService {

	List<PaymentInfo> getPaymentInfo();

	void payResult(PaymentInfo paymentInfo);

}
